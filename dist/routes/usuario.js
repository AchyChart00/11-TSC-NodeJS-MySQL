"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.miVariable = void 0;
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get("/", usuarios_1.getUsuarios);
router.get("/:id", usuarios_1.getUsuario);
router.post("/", usuarios_1.postUsuario);
router.put("/:id", usuarios_1.putUsuario);
router.delete("/:id", usuarios_1.deleteUsuario);
exports.miVariable = 123;
exports.default = router;
//# sourceMappingURL=usuario.js.map