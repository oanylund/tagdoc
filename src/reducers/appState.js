const initialState = {
  folderPath: "Ikke valgt",
  savePath: "Ikke valgt",
  isGenerating: false
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_PS_FOLDER_DIALOG_SUCCESS":
      return {
        ...state,
        folderPath: action.meta.dir ? action.meta.dir : state.folderPath
      };

    default:
      return state;
  }
};

export default appState;
