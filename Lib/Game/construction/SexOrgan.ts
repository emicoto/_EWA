import {} from ".";

export class SexOrgan {
	static Stretch(size: [number, number]) {
		if (size) size[1] += 0.1;
		return size;
	}
	static Develop(sens: number) {
		if (sens) sens += 0.01;
		else sens = 0.01;
		return sens;
	}
}
