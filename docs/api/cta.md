# CTA Component API

The CTA (Call to Action) component is designed to create prominent and customizable calls to action. Below is the documentation for the CTA component.

## Import

```javascript
import { CTA } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| header | `string` | `-` | The main text of the call to action. |
| link | `string` | `-` | Details of the link associated with the call to action. See the `CtaLinkDetails` type for details. |
| linkComponent | `string` | `-` | Specifies the root node's element type for the link. It accepts a string for a standard HTML element or a custom component. Defaults to a (anchor). |
| theme | `azure` \| `black` \| `navy` \| `warp` \| `gray` \| `warp` | `glow` | `-` | Additional theme for the CTA component. |
| showTextOnly | `boolean` | `-` | When true, it will use a link text instead of a button |


### CtaLinkDetails

| Name | Type | Description |
| --- | --- | --- |
| title | `string` | Required. The title of the link. |
| url | `string` | Required. The URL the link directs to. |

### Usage

```javascript
import { CTA } from 'forcepoint-shared-components';

<CTA
  theme="warp"
  header="Schedule a Live Demo of Forcepoint ONE"
  link={{ title: "Secondary", url: "/" }}
/>;
```
