CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name text,
    type text,
    breed text,
    fun_fact text,
    Mendl text,
    notes text,
    color text,
    image text,
    owner_id integer REFERENCES owners(id),
    checked_in boolean
);
CREATE UNIQUE INDEX pets_pkey ON pets(id int4_ops);

-- Table Definition ----------------------------------------------

CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    phone numeric,
    email text,
    emergency_name text,
    emergency_phone numeric,
    name text UNIQUE
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX owners_pkey ON owners(id int4_ops);
CREATE UNIQUE INDEX owners_name_key ON owners(name text_ops);

-- Table Definition ----------------------------------------------

CREATE TABLE "check-ins" (
    id integer DEFAULT nextval('"check-ins_id_seq"'::regclass) PRIMARY KEY,
    pet_id integer,
    check_in_date text,
    check_in_time text,
    check_out_date text,
    check_out_time text
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX "check-ins_pkey" ON "check-ins"(id int4_ops);
