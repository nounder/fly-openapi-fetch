import openapiTS, { astToString } from "npm:openapi-typescript";
import MachinesSpecJSON from "./specs/machines.json" with { type: "json" };

function generateTypes(specJson: any, tsdPath: string) {
  openapiTS(specJson).then((ast) => {
    const contents = astToString(ast);

    Deno.writeFileSync(tsdPath, new TextEncoder().encode(contents));
  });
}

generateTypes(MachinesSpecJSON, "./specs/machines.ts");
