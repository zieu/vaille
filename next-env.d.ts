/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    GITHUB_ID?: string;
    GITHUB_SECRET?: string;
    TWITTER_ID?: string;
    TWITTER_SECRET?: string;
    AUTH0_CLIENT_ID?: string;
    AUTH0_CLIENT_SECRET?: string;
    AUTH0_DOMAIN?: string;
    EMAIL_SERVER_USER?: string;
    EMAIL_SERVER_PASSWORD?: string;
    EMAIL_SERVER_HOST?: string;
    EMAIL_SERVER_PORT?: string;
    EMAIL_FROM?: string;
    NEXTAUTH_URL?: string;
    DATABASE_URL?: string;
  }
}