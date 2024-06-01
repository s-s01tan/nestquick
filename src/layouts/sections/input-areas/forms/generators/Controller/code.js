const formSimpleCode = `import { Controller } from '@nestjs/common';
import { {{name}}Service } from '../services';

@Controller({ path: '{{name}}', version: '{{version}}'})
export class {{name}}Controller {
  constructor(private readonly {{name}}Service: {{name}}Service) {}
}
`;

export default formSimpleCode;
