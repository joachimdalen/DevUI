# Changelog

## 2.0.0-rc12

### ➕ Added

**TextInput:**

- Added `type` prop

## 2.0.0-rc11

### ➕ Added

**Alert:**

- Added `note` style

### 🐞 Fixed

**Badge:**

- Fixed text alignment

**TimePicker:**

- Fixed error when changing period

## 2.0.0-rc10

### ➕ Added

**Badge:**

- Added more badge styles

### 📝 Changed

**TimePicker:**

- Revert: Added timezone support

**DatePicker:**

- Revert: Added timezone support

**DatePickerInput:**

- Revert: Added timezone support

**FormGroup:**

- Removed `notice`

## 2.0.0-rc9

**TimePicker:**

- Added timezone support
- Added prop to hide seconds

**DatePicker:**

- Added timezone support

**DatePickerInput:**

- Added timezone support

**Core:**

- Upgrade dependencies

## 2.0.0-rc8

**Core:**

- Upgrade dependencies

### ➕ Added

**Select:**

- Added option to enable search

## 2.0.0-rc7

### ➕ Added

**Button:**

- Added common button props

**Modal:**

- Added `showCloseButton` to toggle visibility of close button

**DatePickerInput:**

- Added support for inital date to be undefined

### 📝 Changed

**ProgressBar:**

- Move `className` to container

## 2.0.0-rc6

### ➕ Added

**Badge:**

- Added `wrapperClassName` and `className` props.

**Button:**

- Added `iconPlacement` to button to ajust icon location. Options are `start` and `end`.

**DatePickerInput:**

- Added `closeOnChange` to close calendar when value is selected. Defaults to `true`

**Modal:**

- Added `$modal-header-color` to adjust color of modal header

**TextInput:**

- Added `$text-input-icon-color` to adjust color of text input icons

**Toggle:**

- Added event props to `onToggle`
- Added `onBlur`

### 📝 Changed

**DatePickerInput:**

- Updated styling

### 🐞 Fixed

**DatePickerInput:**

- Fixed loading icon now showing when loading

**TextInput:**

- [#40 iconPlacement is not respected in TextInput](https://github.com/joachimdalen/DevUI/issues/40)
- Fixed typo `$text-input-diabled-color` --> `$text-input-disabled-color`
- Fixed typo `$text-input-diabled-background` --> `$text-input-disabled-background`

## 2.0.0-rc5

### 🐞 Fixed

**DatePicker:**

- Updated react import

**TimePicker:**

- Updated react import

## 2.0.0-rc4

### 🐞 Fixed

**DatePicker:**

- Fix issue with `Dayjs` extensions

## 2.0.0-rc3

### ➕ Added

**DatePicker:**

- Added `startDate` and `endDate` to control ranges for dropdowns

### 📝 Changed

**DatePicker:**

- Minor refactors

**DatePicker:**

- Minor refactors

**TimePicker:**

- Minor refactors

## 2.0.0-rc2

#### 🐞 Fixed

**DatePicker:**

- Fixed broken imports

**TimePicker:**

- Fixed broken imports

## 2.0.0-rc1

### ➕ Added

**DatePicker:**

- Added DatePicker component

**DatePickerInput:**

- Added DatePickerInput component

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
