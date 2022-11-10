import { Point } from "./point.interface"
import { User } from "./user.interface"


export interface Route{
    _id: String,
    creator:User,
    participants: [User],
    startPoint: Point,
    endPoint: Point,
    stopPoint: [Point],
	dateOfBeggining: Date
	date: Date
}
