"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var entries = [
    {
        "escaped": "^\\\\[^\\s]"
    },
    {
        "number": "^(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?"
    },
    {
        "colour": "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
    },
    {
        "unit": "^(?:deg|em|%)"
    },
    {
        "name": "^[_a-zA-Z0-9-]+"
    },
    {
        "delimiter": "^(?:;|\\{|\\})"
    },
    {
        "special": "^(?:,|:|\\.|\\(|\\)|\\[|\\])"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwiZXNjYXBlZFwiOiBcIl5cXFxcXFxcXFteXFxcXHNdXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXig/OjB8WzEtOV1bMC05XSopKD86XFxcXC5bMC05XSspP1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNvbG91clwiOiBcIl4jKD86WzAtOWEtZkEtRl17Nn18WzAtOWEtZkEtRl17M30pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5pdFwiOiBcIl4oPzpkZWd8ZW18JSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6IFwiXltfYS16QS1aMC05LV0rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZGVsaW1pdGVyXCI6IFwiXig/Ojt8XFxcXHt8XFxcXH0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzosfDp8XFxcXC58XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2QkE7OztlQUFBOzs7QUEzQkEsSUFBTUEsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlQSJ9