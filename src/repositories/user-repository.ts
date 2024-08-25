import databaseService from "../services/database-service";
import { User } from "../entities/user";

const UserRepository = databaseService.getRepository(User);

export default UserRepository;