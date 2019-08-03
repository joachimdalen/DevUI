# Accordion

An accordion acts as a expansion panel allowing the user to toggle the display of sections of content.

## Props

| Name       | Type                         | Default Value | Required |
| ---------- | ---------------------------- | ------------- | -------- |
| title      | string or React.ReactElement | -             | true     |
| expandIcon | string or React.ReactElement | fa-caret-down | false    |
| expandIcon | string or React.ReactElement | fa-caret-up   | false    |
| expanded   | boolean                      | false         | false    |
| borderless | boolean                      | false         | false    |
| onToggle   | (state: boolean) => void     | false         | false    |

## Example

```jsx
<Accordion
  title="Account"
  expanded={false}
  onToggle={(state: boolean) => {
    console.log(state);
  }}
>
  Hello
</Accordion>
```

For more exapmples, see `Accordion.stories.tsx`

# Accordion Group

The accordion group expands the options of the accordion and allows accordions to be grouped.

## Props

| Name           | Type           | Default Value | Required |
| -------------- | -------------- | ------------- | -------- |
| multiExpand    | boolean        | true          | false    |
| accordionProps | AccordionProps | undefined     | false    |

## Example

```jsx
<AccordionGroup
  accordionProps={{
    expanded: true,
    borderless: true,
    onToggle: (state: boolean) => {
      console.log(state);
    }
  }}
>
  <Accordion title="This is one">Hello</Accordion>
  <Accordion title="This is two">Hello</Accordion>
</AccordionGroup>
```

For more exapmples, see `Accordion.stories.tsx`
