export type ParticipantType = {
  id?: number;
  name: string;
  order: number;
  created_at?: string;
};

export type JudgeType = {
  id: number;
  cuteNess: number;
  fun: number;
  amazing: number;
  sum: number;
  participant_id: number;
  participants?: ParticipantType;
  profiles?: { name: string };
  profile_id?: number;
};

export type JudgeFormData = {
  cuteNess: number;
  fun: number;
  amazing: number;
  participant_id: number | string;
};
