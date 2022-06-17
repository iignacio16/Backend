"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.findById = exports.getEntriesWithoutSensitiveInfo = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default; // Es indicarle a ts que se que estoy trabajando con esos types
const getEntries = () => diaries; // Para devolver las entradas del diario
exports.getEntries = getEntries;
// Hacer un getentries pero sin una variable que contenga el una entrada, es decir p.j. sin comentario
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    }); // Hay que reccorrer el array diaries, y devolver los parámetros que queremos
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (entry != null) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]);
        return restOfDiary;
    }
    return undefined;
};
exports.findById = findById;
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: diaries.length + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
}; // Para añadir una entry
exports.addDiary = addDiary;
