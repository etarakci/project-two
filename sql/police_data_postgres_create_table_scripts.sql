--drop table us_police_killings;
--drop table us_police_contracts;
--drop table us_dod_equipment;

--Police Killings table

CREATE TABLE "us_police_killings" (
	"index" int NOT NULL,
    "victim_name" varchar   NULL,
    "victim_age"  int   NULL,
    "victim_gender" varchar   NULL,
    "victim_race" varchar   NULL,
    "url_image_of_victim" varchar   NULL,
    "date_of_incident" date   NULL,
    "street_address_of_incident" varchar   NULL,
    "city" varchar   NULL,
    "state" varchar   NOT NULL,
    "zipcode" float   NULL,
    "county" varchar   NULL,
    "agency_responsible_for_death" varchar   NULL,
    "cause_of_death" varchar   NULL,
    "description_of_the_circumstances" varchar   NULL,
    "official_disposition_of_death" varchar   NULL,
    "criminal_charges" varchar   NULL,
    "link_to_news_article_or_photo" varchar   NULL,
    "symptoms_of_mental_illness" varchar   NULL,
    "armed_or_unarmed" varchar   NULL,
    "alleged_weapon" varchar   NULL,
    "alleged_threat_level" varchar   NULL,
    "fleeing" varchar   NULL,
    "body_camera" varchar   NULL,
    "off_duty_killing" varchar   NULL,
    "suburban_rural_classification" varchar   NULL,
    CONSTRAINT "pk_us_police_killings" PRIMARY KEY (
        "index"
     )
);

--Police contracts table
CREATE TABLE "us_police_contracts" (
    "index" int   NOT NULL,
    "city" varchar   NULL,
    "policy_language" varchar   NULL,
    "category" varchar   NULL,
    "specific_impact_of_policy" varchar   NULL,
    CONSTRAINT "pk_us_police_contracts" PRIMARY KEY (
        "index"
     )
);

--DOD equipment table
CREATE TABLE "us_dod_equipment" (
    "index" int   NOT NULL,
    "state" varchar   NULL,
    "station_name" varchar   NULL,
    "nsn" varchar   NULL,
    "item_name" varchar   NULL,
    "quantity" int   NULL,
    "ui" varchar   NULL,
    "acquisition_value" float   NULL,
    "demil_code" varchar   NULL,
    "demil_ic" varchar   NULL,
    "ship_date" varchar   NULL,
    CONSTRAINT "pk_us_dod_equipment" PRIMARY KEY (
        "index"
     )
);


ALTER TABLE us_police_killings 
RENAME COLUMN index TO id;

ALTER TABLE us_police_contracts 
RENAME COLUMN index TO id;

ALTER TABLE us_dod_equipment 
RENAME COLUMN index TO id;

select * from us_police_killings;
select count(*) from us_police_killings;
--8240 rows

select * from us_police_contracts;
select count(*) from us_police_contracts;
--576 rows

select * from us_dod_equipment;
select count(*) from us_dod_equipment;
--154780 rows
