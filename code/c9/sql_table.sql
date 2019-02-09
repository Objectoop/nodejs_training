CREATE TABLE `t_topic` (
  `topic_id` int(11) NOT NULL AUTO_INCREMENT,
  `topic_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created_date` date NOT NULL,
  PRIMARY KEY (`topic_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;




CREATE TABLE `t_reply` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `reply_text` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `createed_date` date NOT NULL,
  `topic_id` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
