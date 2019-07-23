// These files must stay js/x because they are also accessed by netlify-cms

import { Card, Button } from "roses"
import { StyledHTML } from './StyledHTML'
export const Styled = StyledHTML
export const MDXGlobalComponents = {
  ...StyledHTML,
  Button,
  Card,
}
