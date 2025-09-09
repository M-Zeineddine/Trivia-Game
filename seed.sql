-- Seed data for Trivia Game
insert into categories (name_ar) values
('رمضان'),
('لبنان'),
('ثقافة عامة'),
('أعلام الدول'),
('رياضة'),
('أفلام'),
('علوم'),
('تاريخ');

-- رمضان questions
with cat as (select id from categories where name_ar='رمضان')
insert into questions (category_id,text_ar,team_tag,points) values
((select id from cat),'سؤال رمضان 200 أ','A',200),
((select id from cat),'سؤال رمضان 400 أ','A',400),
((select id from cat),'سؤال رمضان 600 أ','A',600),
((select id from cat),'سؤال رمضان 200 ب','B',200),
((select id from cat),'سؤال رمضان 400 ب','B',400),
((select id from cat),'سؤال رمضان 600 ب','B',600),
((select id from cat),'سؤال رمضان إضافي 200 أ','A',200),
((select id from cat),'سؤال رمضان إضافي 400 أ','A',400),
((select id from cat),'سؤال رمضان إضافي 600 أ','A',600),
((select id from cat),'سؤال رمضان إضافي 200 ب','B',200),
((select id from cat),'سؤال رمضان إضافي 400 ب','B',400),
((select id from cat),'سؤال رمضان إضافي 600 ب','B',600);

-- لبنان questions
with cat as (select id from categories where name_ar='لبنان')
insert into questions (category_id,text_ar,team_tag,points) values
((select id from cat),'سؤال لبنان 200 أ','A',200),
((select id from cat),'سؤال لبنان 400 أ','A',400),
((select id from cat),'سؤال لبنان 600 أ','A',600),
((select id from cat),'سؤال لبنان 200 ب','B',200),
((select id from cat),'سؤال لبنان 400 ب','B',400),
((select id from cat),'سؤال لبنان 600 ب','B',600),
((select id from cat),'سؤال لبنان إضافي 200 أ','A',200),
((select id from cat),'سؤال لبنان إضافي 400 أ','A',400),
((select id from cat),'سؤال لبنان إضافي 600 أ','A',600),
((select id from cat),'سؤال لبنان إضافي 200 ب','B',200),
((select id from cat),'سؤال لبنان إضافي 400 ب','B',400),
((select id from cat),'سؤال لبنان إضافي 600 ب','B',600);

-- ثقافة عامة questions
with cat as (select id from categories where name_ar='ثقافة عامة')
insert into questions (category_id,text_ar,team_tag,points) values
((select id from cat),'سؤال ثقافة 200 أ','A',200),
((select id from cat),'سؤال ثقافة 400 أ','A',400),
((select id from cat),'سؤال ثقافة 600 أ','A',600),
((select id from cat),'سؤال ثقافة 200 ب','B',200),
((select id from cat),'سؤال ثقافة 400 ب','B',400),
((select id from cat),'سؤال ثقافة 600 ب','B',600),
((select id from cat),'سؤال ثقافة إضافي 200 أ','A',200),
((select id from cat),'سؤال ثقافة إضافي 400 أ','A',400),
((select id from cat),'سؤال ثقافة إضافي 600 أ','A',600),
((select id from cat),'سؤال ثقافة إضافي 200 ب','B',200),
((select id from cat),'سؤال ثقافة إضافي 400 ب','B',400),
((select id from cat),'سؤال ثقافة إضافي 600 ب','B',600);

-- أعلام الدول questions
with cat as (select id from categories where name_ar='أعلام الدول')
insert into questions (category_id,text_ar,team_tag,points) values
((select id from cat),'سؤال أعلام 200 أ','A',200),
((select id from cat),'سؤال أعلام 400 أ','A',400),
((select id from cat),'سؤال أعلام 600 أ','A',600),
((select id from cat),'سؤال أعلام 200 ب','B',200),
((select id from cat),'سؤال أعلام 400 ب','B',400),
((select id from cat),'سؤال أعلام 600 ب','B',600),
((select id from cat),'سؤال أعلام إضافي 200 أ','A',200),
((select id from cat),'سؤال أعلام إضافي 400 أ','A',400),
((select id from cat),'سؤال أعلام إضافي 600 أ','A',600),
((select id from cat),'سؤال أعلام إضافي 200 ب','B',200),
((select id from cat),'سؤال أعلام إضافي 400 ب','B',400),
((select id from cat),'سؤال أعلام إضافي 600 ب','B',600);

-- رياضة questions
with cat as (select id from categories where name_ar='رياضة')
insert into questions (category_id,text_ar,team_tag,points) values
((select id from cat),'سؤال رياضة 200 أ','A',200),
((select id from cat),'سؤال رياضة 400 أ','A',400),
((select id from cat),'سؤال رياضة 600 أ','A',600),
((select id from cat),'سؤال رياضة 200 ب','B',200),
((select id from cat),'سؤال رياضة 400 ب','B',400),
((select id from cat),'سؤال رياضة 600 ب','B',600),
((select id from cat),'سؤال رياضة إضافي 200 أ','A',200),
((select id from cat),'سؤال رياضة إضافي 400 أ','A',400),
((select id from cat),'سؤال رياضة إضافي 600 أ','A',600),
((select id from cat),'سؤال رياضة إضافي 200 ب','B',200),
((select id from cat),'سؤال رياضة إضافي 400 ب','B',400),
((select id from cat),'سؤال رياضة إضافي 600 ب','B',600);

-- أفلام questions
with cat as (select id from categories where name_ar='أفلام')
insert into questions (category_id,text_ar,team_tag,points) values
((select id from cat),'سؤال أفلام 200 أ','A',200),
((select id from cat),'سؤال أفلام 400 أ','A',400),
((select id from cat),'سؤال أفلام 600 أ','A',600),
((select id from cat),'سؤال أفلام 200 ب','B',200),
((select id from cat),'سؤال أفلام 400 ب','B',400),
((select id from cat),'سؤال أفلام 600 ب','B',600),
((select id from cat),'سؤال أفلام إضافي 200 أ','A',200),
((select id from cat),'سؤال أفلام إضافي 400 أ','A',400),
((select id from cat),'سؤال أفلام إضافي 600 أ','A',600),
((select id from cat),'سؤال أفلام إضافي 200 ب','B',200),
((select id from cat),'سؤال أفلام إضافي 400 ب','B',400),
((select id from cat),'سؤال أفلام إضافي 600 ب','B',600);

-- علوم questions
with cat as (select id from categories where name_ar='علوم')
insert into questions (category_id,text_ar,team_tag,points) values
((select id from cat),'سؤال علوم 200 أ','A',200),
((select id from cat),'سؤال علوم 400 أ','A',400),
((select id from cat),'سؤال علوم 600 أ','A',600),
((select id from cat),'سؤال علوم 200 ب','B',200),
((select id from cat),'سؤال علوم 400 ب','B',400),
((select id from cat),'سؤال علوم 600 ب','B',600),
((select id from cat),'سؤال علوم إضافي 200 أ','A',200),
((select id from cat),'سؤال علوم إضافي 400 أ','A',400),
((select id from cat),'سؤال علوم إضافي 600 أ','A',600),
((select id from cat),'سؤال علوم إضافي 200 ب','B',200),
((select id from cat),'سؤال علوم إضافي 400 ب','B',400),
((select id from cat),'سؤال علوم إضافي 600 ب','B',600);

-- تاريخ questions
with cat as (select id from categories where name_ar='تاريخ')
insert into questions (category_id,text_ar,team_tag,points) values
((select id from cat),'سؤال تاريخ 200 أ','A',200),
((select id from cat),'سؤال تاريخ 400 أ','A',400),
((select id from cat),'سؤال تاريخ 600 أ','A',600),
((select id from cat),'سؤال تاريخ 200 ب','B',200),
((select id from cat),'سؤال تاريخ 400 ب','B',400),
((select id from cat),'سؤال تاريخ 600 ب','B',600),
((select id from cat),'سؤال تاريخ إضافي 200 أ','A',200),
((select id from cat),'سؤال تاريخ إضافي 400 أ','A',400),
((select id from cat),'سؤال تاريخ إضافي 600 أ','A',600),
((select id from cat),'سؤال تاريخ إضافي 200 ب','B',200),
((select id from cat),'سؤال تاريخ إضافي 400 ب','B',400),
((select id from cat),'سؤال تاريخ إضافي 600 ب','B',600);
