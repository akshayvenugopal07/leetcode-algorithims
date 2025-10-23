/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    // Build adjacency list with both original and reverse directions
    const graph = Array.from({ length: n }, () => []);

    // For each connection, add both directions but mark original as needing inversion
    connections.forEach(([from, to]) => {
        graph[from].push([to, 1]); // Original direction - needs inversion if traversed
        graph[to].push([from, 0]); // Reverse direction - already correct
    });

    const visited = new Set();
    let inversions = 0;

    // DFS from capital (city 0) to visit all cities
    function dfs(city) {
        visited.add(city);

        // Visit all neighbors
        for (const [neighbor, needsInversion] of graph[city]) {
            if (!visited.has(neighbor)) {
                // If we traverse an original edge (away from capital), we need to invert it
                inversions += needsInversion;
                dfs(neighbor);
            }
        }
    }

    dfs(0);
    return inversions;
};