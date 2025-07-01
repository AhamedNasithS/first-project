import { create } from "zustand";

const useUserDetailsStore = create((set) => ({
  userId: "",
  companyId: "",
  name: "",
  userImage: "",
  userToken: "",
  companyName: "",
  userEmail: "",
  userDesignation: "",
  workSpaceUrl: "",
  deviceId: "",
  setUserId: (newUserId) => set({ userId: newUserId }),
  setCompanyId: (newCompanyId) => set({ companyId: newCompanyId }),
  setCompanyName: (companyName) => set({ companyName }),
  setName: (newName) => set({ name: newName }),
  setUserImage: (newUserImage) => set({ userImage: newUserImage }),
  setUserToken: (newUserToken) => set({ userToken: newUserToken }),
  setUserEmail: (newUserEmail) => set({ userEmail: newUserEmail }),
  setUserDesignation: (newUserDesignation) => set({ userDesignation: newUserDesignation }),
  setWorkSpaceUrl: (newWorkSpaceUrl) => set({ workSpaceUrl: newWorkSpaceUrl }),
  setDeviceId: (newDeviceId) => set({ deviceId: newDeviceId }),
}));

export default useUserDetailsStore;
