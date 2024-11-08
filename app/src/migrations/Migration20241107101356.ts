import { Migration } from '@mikro-orm/migrations';

export class Migration20241107101356 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`
      CREATE TABLE IF NOT EXISTS enterprises (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        bio VARCHAR(255) NOT NULL DEFAULT '',
        image VARCHAR(255) NOT NULL DEFAULT '',
        password VARCHAR(255) NOT NULL
      ) DEFAULT CHARACTER SET utf8mb4 ENGINE = InnoDB;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS schools (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        bio VARCHAR(255) NOT NULL DEFAULT '',
        image VARCHAR(255) NOT NULL DEFAULT '',
        password VARCHAR(255) NOT NULL
      ) DEFAULT CHARACTER SET utf8mb4 ENGINE = InnoDB;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS users (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        bio VARCHAR(255) NOT NULL DEFAULT '',
        image VARCHAR(255) NOT NULL DEFAULT '',
        password VARCHAR(255) NOT NULL
      ) DEFAULT CHARACTER SET utf8mb4 ENGINE = InnoDB;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS school_departments (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        school_id INT UNSIGNED NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS university_majors (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS recruitments (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        content TEXT NOT NULL,
        requirement TEXT,
        enterprise_id INT UNSIGNED,
        status INT DEFAULT 0,
        number_of_recruitment INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE SET NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS news (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(250) NOT NULL,
        content TEXT NOT NULL,
        school_id INT UNSIGNED,
        enterprise_id INT UNSIGNED,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE SET NULL,
        FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE SET NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS notifications (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(250) NOT NULL,
        content TEXT NOT NULL,
        school_id INT UNSIGNED,
        enterprise_id INT UNSIGNED,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE SET NULL,
        FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE SET NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS job_fairs (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        description TEXT,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS school_job_fairs (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        school_id INT UNSIGNED NOT NULL,
        job_fair_id INT UNSIGNED NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
        FOREIGN KEY (job_fair_id) REFERENCES job_fairs(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS user_job_fairs (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        user_id INT UNSIGNED NOT NULL,
        job_fair_id INT UNSIGNED NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (job_fair_id) REFERENCES job_fairs(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS enterprise_job_fairs (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        enterprise_id INT UNSIGNED NOT NULL,
        job_fair_id INT UNSIGNED NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE CASCADE,
        FOREIGN KEY (job_fair_id) REFERENCES job_fairs(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    this.addSql(`
      CREATE TABLE IF NOT EXISTS universities (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
  }

  override async down(): Promise<void> {
    // this.addSql(`DROP TABLE IF EXISTS enterprise_job_fairs;`);
    // this.addSql(`DROP TABLE IF EXISTS user_job_fairs;`);
    // this.addSql(`DROP TABLE IF EXISTS school_job_fairs;`);
    // this.addSql(`DROP TABLE IF EXISTS job_fairs;`);
    // this.addSql(`DROP TABLE IF EXISTS notifications;`);
    // this.addSql(`DROP TABLE IF EXISTS news;`);
    // this.addSql(`DROP TABLE IF EXISTS recruitments;`);
    // this.addSql(`DROP TABLE IF EXISTS university_majors;`);
    // this.addSql(`DROP TABLE IF EXISTS school_departments;`);
    // this.addSql(`DROP TABLE IF EXISTS universities;`);
    // this.addSql(`DROP TABLE IF EXISTS users;`);
    // this.addSql(`DROP TABLE IF EXISTS schools;`);
    // this.addSql(`DROP TABLE IF EXISTS enterprises;`);
  }

}
