/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-04-20 19:09:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `chat_msg`
-- ----------------------------
DROP TABLE IF EXISTS `chat_msg`;
CREATE TABLE `chat_msg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_id` int(11) NOT NULL,
  `to_id` int(11) NOT NULL,
  `msg` text NOT NULL,
  `time` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chat_msg
-- ----------------------------

-- ----------------------------
-- Table structure for `contacts`
-- ----------------------------
DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contacts
-- ----------------------------
INSERT INTO `contacts` VALUES ('1', '1', '9');
INSERT INTO `contacts` VALUES ('2', '9', '1');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(16) NOT NULL,
  `nickname` varchar(12) NOT NULL,
  `header_url` varchar(64) NOT NULL,
  `country` varchar(32) NOT NULL,
  `area` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '123456', '康熙', 'http://localhost:8888/assets/images/20170420/contact_male.png', '', '');
INSERT INTO `user` VALUES ('9', 'admin888', '654321', '韦小宝', 'https://sinacloud.net/vue-wechat/images/headers/yehua.jpg', '', '');
