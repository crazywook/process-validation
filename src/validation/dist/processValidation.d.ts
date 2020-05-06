import { ClassType } from 'class-transformer/ClassTransformer';
export declare function isJsonValid<T>(dtoClass: ClassType<T>, json: {}): Promise<boolean>;
