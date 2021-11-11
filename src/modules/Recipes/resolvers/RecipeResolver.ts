import { Resolver } from 'type-graphql';

import { Recipe } from '../types/RecipeType';

@Resolver(Recipe)
class RecipeResolver {}

export { RecipeResolver };
