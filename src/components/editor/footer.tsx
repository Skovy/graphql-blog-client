import styled from "styled-components";

import { config } from "config";

const EditorFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${config.sizings.base};
  align-items: center;

  * + * {
      margin-left: ${config.sizings.base};
    }
  }
`;

export { EditorFooter };
