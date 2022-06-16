"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./config/index");
const router_1 = __importDefault(require("./router"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const https_1 = __importDefault(require("https"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '..', '..', '/build')));
app.use(router_1.default);
const keys = {
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, 'cert', 'localhost+1-key.pem')),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, 'cert', 'localhost+1.pem'))
};
const port = index_1.PORT || 5001;
https_1.default.createServer(keys, app).listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMENBQXFDO0FBQ3JDLHNEQUE2QjtBQUM3QixzREFBNkI7QUFDN0IsZ0RBQXVCO0FBQ3ZCLGtEQUF5QjtBQUN6QixnREFBdUI7QUFDdkIsNENBQW1CO0FBRW5CLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFBO0FBRXJCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFBO0FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNuRSxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsQ0FBQTtBQUlmLE1BQU0sSUFBSSxHQUFHO0lBQ1gsR0FBRyxFQUFFLFlBQUUsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDekUsSUFBSSxFQUFFLFlBQUUsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7Q0FDdkUsQ0FBQTtBQUdELE1BQU0sSUFBSSxHQUFHLFlBQUksSUFBSSxJQUFJLENBQUE7QUFDekIsZUFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQT1JUIH0gZnJvbSAnLi9jb25maWcvaW5kZXgnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICcuLicsICcvYnVpbGQnKSkpXG5hcHAudXNlKHJvdXRlcilcblxuXG5cbmNvbnN0IGtleXMgPSB7XG4gIGtleTogZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsICdjZXJ0JywgJ2xvY2FsaG9zdCsxLWtleS5wZW0nKSksXG4gIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnY2VydCcsICdsb2NhbGhvc3QrMS5wZW0nKSlcbn1cblxuXG5jb25zdCBwb3J0ID0gUE9SVCB8fCA1MDAxXG5odHRwcy5jcmVhdGVTZXJ2ZXIoa2V5cywgYXBwKS5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYFJ1bm5pbmcgb24gcG9ydCAke3BvcnR9YCkpIl19