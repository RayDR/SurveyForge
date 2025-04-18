module.exports = {
  apps: [
    {
      name: "surveys-iu",
      script: "npm",
      args: "start",
      cwd: "/forge/surveys/survey-iu",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },
      error_file: "/var/log/pm2/survey-iu-error.log",
      out_file: "/var/log/pm2/survey-iu-out.log",
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_restarts: 3
    }
  ]
};

