export default (sequelize, {
  INTEGER,
  DATE,
  STRING,
}) => {
  const user = sequelize.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    full_name: {
      type: STRING,
    },
    rm: {
      type: STRING,
    },
    mobile: {
      type: STRING,
    },
    birthday: {
      type: DATE,
    },
    email: {
      type: STRING,
    },
    created_on: {
      type: DATE,
    },
    refer_source: {
      type: STRING,
    },
    utm_source: {
      type: STRING,
    },
    utm_medium: {
      type: STRING,
    },
    age: {
      type: STRING,
    },
    gender: {
      type: STRING,
    },
    is_archived: {
      type: INTEGER,
    },
  }, { underscored: true });

  user.associate = () => {
    user.hasOne(sequelize.models.user_detail);
    user.hasOne(sequelize.models.additional_data);
    user.hasMany(sequelize.models.call_log);
    user.hasOne(sequelize.models.client_packages);
  };

  return user;
};
