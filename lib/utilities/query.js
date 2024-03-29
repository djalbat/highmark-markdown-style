"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    nodeQuery: function() {
        return nodeQuery;
    },
    nodesQuery: function() {
        return nodesQuery;
    }
});
var _occamquery = require("occam-query");
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first;
function nodeQuery(expression) {
    var query = _occamquery.Query.fromExpression(expression);
    return function(node) {
        var nodes = query.execute(node), nodesLength = nodes.length;
        if (nodesLength > 0) {
            var firstNode = first(nodes);
            node = firstNode; ///
        } else {
            node = null;
        }
        return node;
    };
}
function nodesQuery(expression) {
    var query = _occamquery.Query.fromExpression(expression);
    return function(node) {
        var nodes = query.execute(node);
        return nodes;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnkoZXhwcmVzc2lvbikge1xuICBjb25zdCBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnkoZXhwcmVzc2lvbikge1xuICBjb25zdCBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsibm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJleHByZXNzaW9uIiwicXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwibm9kZSIsIm5vZGVzIiwiZXhlY3V0ZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU9nQkEsU0FBUztlQUFUQTs7SUFtQkFDLFVBQVU7ZUFBVkE7OzswQkF4Qk07eUJBQ1M7QUFFL0IsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFRCxTQUFTRixVQUFVSSxVQUFVO0lBQ2xDLElBQU1DLFFBQVFDLGlCQUFLLENBQUNDLGNBQWMsQ0FBQ0g7SUFFbkMsT0FBTyxTQUFTSSxJQUFJO1FBQ2xCLElBQU1DLFFBQVFKLE1BQU1LLE9BQU8sQ0FBQ0YsT0FDdEJHLGNBQWNGLE1BQU1HLE1BQU07UUFFaEMsSUFBSUQsY0FBYyxHQUFHO1lBQ25CLElBQU1FLFlBQVlYLE1BQU1PO1lBRXhCRCxPQUFPSyxXQUFXLEdBQUc7UUFDdkIsT0FBTztZQUNMTCxPQUFPO1FBQ1Q7UUFFQSxPQUFPQTtJQUNUO0FBQ0Y7QUFFTyxTQUFTUCxXQUFXRyxVQUFVO0lBQ25DLElBQU1DLFFBQVFDLGlCQUFLLENBQUNDLGNBQWMsQ0FBQ0g7SUFFbkMsT0FBTyxTQUFTSSxJQUFJO1FBQ2xCLElBQU1DLFFBQVFKLE1BQU1LLE9BQU8sQ0FBQ0Y7UUFFNUIsT0FBT0M7SUFDVDtBQUNGIn0=