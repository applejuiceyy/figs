import { writable, type Writable } from 'svelte/store';

function createLoader() {
	const { subscribe, set, update }: Writable<string[]> = writable([]);

	return {
		subscribe,
        request(reason: string) {
            update(val => [...val, reason]);
            let l = true;
            return () => {
                if (l) {
                    l = false;
                    update(val => {
                        let index = val.findIndex(v => v === reason);
                        return val.filter((_, i) => i !== index);
                    });
                }
            }
        }
	};
}

export default createLoader();