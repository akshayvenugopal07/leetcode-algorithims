import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

// =============================================================================
// STEP 1: CREATE CACHE CONTEXT
// =============================================================================
// Context allows us to share the cache object across ALL components
// Without this, each component would have its own separate cache
const CacheContext = createContext(null);

// =============================================================================
// STEP 2: CACHE PROVIDER COMPONENT
// =============================================================================
// This wraps your app and provides the shared cache to all child components
export function CacheProvider({ children }) {
  // useRef creates a mutable object that persists across renders
  // Unlike useState, changing cache.current doesn't trigger re-renders
  // Perfect for cache storage since we don't need UI updates when cache changes
  const cache = useRef({});

  return (
    <CacheContext.Provider value={cache}>{children}</CacheContext.Provider>
  );
}

// =============================================================================
// STEP 3: THE CACHING HOOK
// =============================================================================
export function useCache(key, fetchData) {
  // Get the shared cache from Context
  const cacheRef = useContext(CacheContext);

  if (!cacheRef) {
    throw new Error("useCache must be used within a CacheProvider");
  }

  // STATE: Track loading, error, and data states
  // These trigger re-renders when they change (unlike useRef)
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  // FETCH FUNCTION: Wrapped in useCallback to prevent recreation on every render
  // Dependencies: [key, fetchData] - only recreate if these change
  const fetchAndCache = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      // Call the fetchData function passed by the component
      const result = await fetchData();

      // Store in cache using the key
      cacheRef.current[key] = result;

      // Update state to trigger re-render with new data
      setData(result);
    } catch (error) {
      console.error(`Error fetching data for key "${key}":`, error);
      setIsError(true);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, [key, fetchData, cacheRef]);

  // REFETCH FUNCTION: Allows manual cache invalidation
  // useCallback ensures this function reference stays stable
  const refetch = useCallback(() => {
    return fetchAndCache();
  }, [fetchAndCache]);

  // INITIAL LOAD: Check cache and fetch if needed
  // useEffect runs after component renders
  useEffect(() => {
    // Check if data exists in cache
    if (cacheRef.current[key] !== undefined) {
      // Cache hit! Use cached data
      setData(cacheRef.current[key]);
      setIsLoading(false);
    } else {
      // Cache miss! Fetch new data
      fetchAndCache();
    }
  }, [key, fetchAndCache, cacheRef]); // Re-run if key changes

  // Return API for component to use
  return {
    data,
    isLoading,
    isError,
    refetch,
  };
}

// =============================================================================
// DEMO: EXAMPLE USAGE
// =============================================================================

// Simulate an API call
const fetchUserData = async (userId) => {
  console.log(`🌐 Fetching user ${userId} from API...`);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate random success/failure
  if (Math.random() > 0.8) {
    throw new Error("API Error");
  }

  return {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`,
    fetchedAt: new Date().toLocaleTimeString(),
  };
};

// Component that uses the cache hook
function UserProfile({ userId }) {
  // Use the hook with a unique key and fetch function
  const { data, isLoading, isError, refetch } = useCache(
    `user-${userId}`, // Cache key
    () => fetchUserData(userId) // Fetch function
  );

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white">
      <h3 className="text-lg font-semibold mb-2">User Profile {userId}</h3>

      {isLoading && <div className="text-blue-600">Loading...</div>}

      {isError && (
        <div className="text-red-600">
          ❌ Error loading user data
          <button
            onClick={refetch}
            className="ml-2 px-3 py-1 bg-red-100 rounded hover:bg-red-200"
          >
            Retry
          </button>
        </div>
      )}

      {data && !isLoading && (
        <div className="space-y-1">
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p className="text-sm text-gray-600">Fetched at: {data.fetchedAt}</p>
          <button
            onClick={refetch}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Refetch
          </button>
        </div>
      )}
    </div>
  );
}

// Main App Component
export default function App() {
  const [showSecondProfile, setShowSecondProfile] = useState(false);

  return (
    <CacheProvider>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">React Caching Hook Demo</h1>
          <p className="text-gray-600 mb-6">
            Try loading profiles, then unmount and remount them to see caching
            in action!
          </p>

          <div className="space-y-4">
            <UserProfile userId={1} />

            <button
              onClick={() => setShowSecondProfile(!showSecondProfile)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              {showSecondProfile ? "Hide" : "Show"} Second Profile (Same User)
            </button>

            {showSecondProfile && (
              <div className="border-2 border-green-300 rounded-lg p-2">
                <p className="text-sm text-green-700 mb-2">
                  👇 This uses the same cache key, so it loads instantly!
                </p>
                <UserProfile userId={1} />
              </div>
            )}

            <div className="border-t-2 pt-4">
              <UserProfile userId={2} />
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="font-semibold mb-2">How It Works:</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>First load: Fetches from "API" (simulated)</li>
              <li>Subsequent loads with same key: Instant (from cache)</li>
              <li>
                Refetch: Manually invalidates cache and fetches fresh data
              </li>
              <li>Different keys: Separate cache entries</li>
              <li>Check console to see when actual fetches occur</li>
            </ul>
          </div>
        </div>
      </div>
    </CacheProvider>
  );
}
