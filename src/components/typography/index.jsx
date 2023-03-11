import {TextTypography} from "./typography.styles";

export const Typography = ({ tag, children, ...props }) => (
    <TextTypography as={tag} {...props}>
        {children}
    </TextTypography>
);