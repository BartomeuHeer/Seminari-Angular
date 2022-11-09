import { Point } from "./point.interface"
import { User } from "./user.interface"


export interface Route{
    _id: string,
    name: String,
    creator:User,
    participants: [User],
    startPoint: Point,
    endPoint: Point,
    stopPoint: [Point],
	dateOfEntry: Date
}
