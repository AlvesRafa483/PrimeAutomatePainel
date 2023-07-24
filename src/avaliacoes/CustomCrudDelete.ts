import {
    RedirectionSideEffect,
    RefreshSideEffect,
    CRUD_DELETE,
    DELETE,
  } from "react-admin";
  
  export const CustomCrudDelete = (
    resource: string,
    id: Identifier,
    previousData: Record,
    basePath: string,
    redirectTo: RedirectionSideEffect = "list",
    refresh: RefreshSideEffect = true
  ): CrudDeleteAction => ({
    type: CRUD_DELETE,
    payload: { id, previousData },
    meta: {
      resource,
      fetch: DELETE,
      onSuccess: {
        notification: {
          level: "info",
          messageArgs: {
            smart_count: 1,
          },
          body: `Deleted User ${previousData.userEmail}`,
        },
        refresh,
        redirectTo,
        basePath,
      },
      //On Failure, react-admin Prints whatever Failure Error message the backend provides, But we can modify the notification Level below.
      onFailure: {
        notification: {
          level: "warning",
        },
      },
    },
  });