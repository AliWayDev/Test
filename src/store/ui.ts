import { create } from "zustand";
import { createSelectors } from "./generators/createSelector";

interface State {
  sidebar: boolean;
  infomodal: string;
}

interface Actions {
  toggleSidebar: () => void;
  clearInfo: () => void;
  toggleInfoModal: (text: string) => void;
}

const useUiStore = create<State & Actions>((set, get) => ({
  sidebar: false,
  infomodal: "",
  clearInfo: () => {
    set({ infomodal: "" });
  },
  toggleInfoModal(text: string) {
    set({ infomodal: text });
  },
  toggleSidebar: () => {
    const { sidebar } = get();
    set({ sidebar: !sidebar });
  },
}));

export default createSelectors(useUiStore);
