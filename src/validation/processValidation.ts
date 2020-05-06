import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { ClassType } from 'class-transformer/ClassTransformer'

export async function isJsonValid<T>(dtoClass: ClassType<T>, json: {}) {

  const validatee = plainToClass(dtoClass, json)
  const errors = await validate(validatee)

  if (errors.length) {
    console.error(errors.map(e => `${e.property}: ${JSON.stringify(e.constraints)}`))
    return false
  }
  return true
}
