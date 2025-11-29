## Summary

此 PR 建立了一個基於 React + TypeScript + Vite 的待辦事項清單應用程式，採用新世紀福音戰士（Evangelion）主題設計。這是專案的初始版本，包含完整的開發環境設定和核心功能實作。

### Key Changes

- 🎯 使用 Vite 建立 React + TypeScript 專案架構，配置 ESLint 和 TypeScript 編譯選項
- 🎨 整合 Tailwind CSS 並建立自訂的 Evangelion 主題配色系統（紫色、綠色、深色背景）
- ✨ 實作完整的待辦事項 CRUD 功能（新增、切換完成狀態、刪除）
- 🎭 開發響應式 UI 元件，包含霓虹光效、漸層邊框、動畫效果等視覺特效
- 📦 建立模組化元件結構（TodoList 容器元件 + TodoItem 展示元件）
- ⚙️ 配置 Claude Code 開發環境設定（Learning 模式和權限管理）

## Type of Change

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [x] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [x] 📚 Documentation update
- [ ] ♻️ Refactoring (no functional changes)
- [x] 🎨 Style/formatting changes
- [ ] 🧪 Test improvements
- [x] 🔧 Configuration changes

## Test Plan

### Manual Testing

- **環境啟動測試**
  - 執行 `npm install` 安裝所有相依套件
  - 執行 `npm run dev` 啟動開發伺服器
  - 確認瀏覽器能正常開啟應用程式（預設 http://localhost:5173）

- **功能測試**
  - 在輸入框中輸入任務文字並點擊 "Deploy" 按鈕，確認新任務出現在列表中
  - 測試 Enter 鍵快捷輸入功能
  - 點擊任務的核取方塊或文字，確認能切換完成狀態（綠色邊框 + 刪除線）
  - 懸停在任務項目上，確認動作按鈕（✓ 和 ✕）出現
  - 點擊刪除按鈕，確認任務從列表中移除
  - 確認任務計數器正確顯示總數和已完成數量

- **UI/UX 測試**
  - 確認 Evangelion 主題配色正確套用（紫色、綠色霓虹光效）
  - 測試響應式設計在不同螢幕尺寸下的表現
  - 確認動畫效果流暢（脈衝動畫、懸停效果、轉場動畫）
  - 驗證空狀態顯示（無任務時的提示訊息）

- **TypeScript 編譯測試**
  - 執行 `npm run build` 確認專案能成功編譯
  - 檢查無 TypeScript 類型錯誤
  - 確認 ESLint 檢查通過

## Breaking Changes

None

## Checklist

- [x] 📝 Code follows the style guidelines
- [x] 👀 Self-review has been performed
- [ ] 🧪 Tests have been added/updated
- [x] 📖 Documentation has been updated
