# Changelog

## 2.0.0-rc1

### ➕ Added

**DatePicker:**

- Added DatePicker component

**TimePicker:**

- Added TimePicker component

### 📝 Changed

**Select:**

- Changed default value to accept `string | number` instead of `SelectOption`
- Changed `SelectOption.value` to accept `string | number` instead of `string`

**Core:**

- Upgraded to React 17
- Upgrade dependencies

## 1.3.1

#### 🐞 Fixed

**Empty:**

- Fixed content being positioned weirdly when it fills the full page
- Added `className` prop

**SplitButton:**

- Fixed aligment of menu items

## 1.3.0

### ➕ Added

**DataTable:**

- Added responsive mode to `DataTable`
  - Added `omitFromSmall` prop to `DataTable` column. This will omit the column when rendered on small devices.
  - Added `spanSmall` prop to `DataTable` column. When `true`, this will omit the column header when rendered on small devices and render the value full width.

**Flex:**

- Added `grow` prop to `Flex`

**Overlay**

- Added `onBackgroundClick`

### 📝 Changed

**DataTable:**

- Changed signature for datatable column renderer

**Core:**

- Some minor moves and cleanups

---

<!---
Changelog template:

## 0.0.X
#### ➕ Added
 This was added
#### 📝 Changed
 This was changed
#### 🐞 Fixed
 This was fixed
-->
