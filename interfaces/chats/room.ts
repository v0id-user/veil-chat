interface Room {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  avatarLink: string;
  createdById: string;
  participantsIds: string[];
}

export default Room;
