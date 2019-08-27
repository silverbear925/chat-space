# README

##userテーブル

|Column|Type|Options|
|------|----|-------|
|name|sting|


###Association

has_many :uers_groups
has_many :group, throuth: :users_groups
belongs_to :comment

##groupテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|string|


###Association

has_many :uers_groups
has_many :user, throuth: :users_groups

##users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

###Association

belongs_to :user
belongs_to :group

##commentテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

###Association

belongs_to :user
belongs_to :group

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...