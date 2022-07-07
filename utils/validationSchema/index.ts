import * as yup from 'yup';

const REQUIRED = 'は必須項目です。';
const MAX = '以内で入力してください。';

const EMAIL = '正しいメールアドレスを入力してください。';
const PASSWORD_MIN = '最低８文字入力してください。';
const PASSWORD_LOWER = '英小文字を含める必要があります。';
const PASSWORD = 'パスワードは半角英数字で入力してください。';

// ログイン
export const LoginSchema = yup.object().shape({
  email: yup.string().email(EMAIL).required(`メールアドレス${REQUIRED}`),
  password: yup
    .string()
    .min(8, PASSWORD_MIN)
    .max(255, `255文字${MAX}`)
    .matches(/(?=.*[a-z])/, PASSWORD_LOWER) // 英字
    .matches(/^[0-9a-zA-Z]+$/, PASSWORD) // 半角英数字
    .required(`パスワード${REQUIRED}`),
});

// 審査
export const judgeSchema = yup.object().shape({
  member: yup.string().required(`審査対象${REQUIRED}`),
  cuteNess: yup.number().required(`可愛さ${REQUIRED}`),
  fun: yup.number().required(`面白さ${REQUIRED}`),
  amazing: yup.number().required(`パフォーマンスの凄さ${REQUIRED}`),
});
