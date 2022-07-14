import { Session } from '@supabase/supabase-js';
import create from 'zustand';
import { JudgeType } from '../types';

type State = {
  session: Session | null;
  setSession: (payload: Session | null) => void;
  judgments: JudgeType[] | undefined;
  setJudgments: (payload: JudgeType[] | undefined) => void;
  resetJudgments: () => void;
  standBy: boolean | null;
  setStandBy: (payload: boolean) => void;
};

const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  judgments: [
    { id: 0, cuteNess: 0, fun: 0, amazing: 0, sum: 0, participant_id: 0 },
  ],
  setJudgments: (payload) =>
    set({
      judgments: payload,
    }),
  resetJudgments: () => set({ judgments: [] }),
  standBy: false,
  setStandBy: (payload) => set({ standBy: payload }),
}));

export default useStore;
