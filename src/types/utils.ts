export type Nullable<Type = any> = {
	[Key in keyof Type]: Type[Key] | null;
};
