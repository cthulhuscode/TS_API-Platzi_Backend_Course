"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
// Only those origins can do requests
const whitelist = [
    "http://localhost:8080",
    "https://myapp.com",
    "http://localhost:5173",
];
exports.corsOptions = {
    origin: (origin, cb) => {
        if (whitelist.includes(origin) || !origin)
            cb(null, true);
        else
            cb(new Error("Access forbbiden"));
    },
};
