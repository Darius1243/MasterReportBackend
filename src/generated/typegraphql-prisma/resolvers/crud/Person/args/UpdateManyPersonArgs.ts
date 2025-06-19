import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonUncheckedUpdateManyInput } from "../../../inputs/PersonUncheckedUpdateManyInput";
import { PersonWhereInput } from "../../../inputs/PersonWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPersonArgs {
  @TypeGraphQL.Field(_type => PersonUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: PersonUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  where?: PersonWhereInput | undefined;
}
