interface SocialContacts {
  github?:string;
  twitter?:string;
  weibo?:string;
  wechat?:string
}

interface Creator{
  name: string;
  description: string;
  image: string;
  social?: SocialContacts;
  id?: string;
}
