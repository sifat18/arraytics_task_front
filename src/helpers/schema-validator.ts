export const getErrorMessageByPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  const properties = propertyPath.split(".");

  let value = obj;

  for (const prop of properties) {
    if (value[prop]) {
      value = value[prop];
    } else {
      ("@reduxjs/toolkit/query");
      return undefined;
    }
  }

  return value.message;
};
