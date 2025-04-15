import { ref } from "vue";
import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

type UuidItem = {
	uuid: string;
	hasUsed: boolean;
};

export const useUUIDListStore = defineStore("uuidList", () => {
	const uuidList = ref<UuidItem[]>([] as UuidItem[]);

	function generateUUID() {
		const newUUIDs = Array.from({ length: 10 }, () => ({
			uuid: uuid(),
			hasUsed: false,
		}));

		uuidList.value.push(...newUUIDs);
		uuidList.value.splice(0, uuidList.value.length - 10);
	}

	function useUUID(uuid: string) {
		const item = uuidList.value.find((item) => item.uuid === uuid);
		if (item) {
			item.hasUsed = true;
		}
	}

	return { uuidList, generateUUID, useUUID };
});
