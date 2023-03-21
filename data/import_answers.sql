BEGIN;


-- ALTER TABLE "answers"
--   DROP CONSTRAINT answer_question_id_fkey;

-- INSERT INTO "quizzes" ("id", "title", "description", "createdAt", "updatedAt") VALUES
-- (1, 'Animaux célèbres - I', 'Tantôt effrayants, tantôt drôles.', NOW(), NOW());

-- INSERT INTO "questions" ("id", "quiz_id", "question", "anecdote","wiki", "answer_id", "createdAt", "updatedAt") VALUES
-- (1, 1, 'Dans le film d''animation L''Âge de glace, qu''est-ce qui échappe à l''écureuil Scrat ?', 'À l''occasion de la sortie de L''Âge de glace 4, Scrat a eu son double de cire au Musée Grévin le 20 juin 2012.', 'Scrat',  1 , NOW(), NOW() );


-- ALTER TABLE "answers"
--   ADD FOREIGN KEY ("question_id") REFERENCES "questions" ("id");




INSERT INTO "questions" ("id", "quizz_id", "question", "anecdote","wiki", "answers_id") VALUES
(1, 1, 'Dans le film d''animation L''Âge de glace, qu''est-ce qui échappe à l''écureuil Scrat ?', 'À l''occasion de la sortie de L''Âge de glace 4, Scrat a eu son double de cire au Musée Grévin le 20 juin 2012.', 'Scrat',  1 );





COMMIT;

BEGIN;

SELECT setval('answer_id_seq', (SELECT MAX(id) from "answers"));
SELECT setval('question_id_seq', (SELECT MAX(id) from "questions"));
SELECT setval('quiz_id_seq', (SELECT MAX(id) from "quizzes"));
SELECT setval('categories_id_seq', (SELECT MAX(id) from "categories"));



COMMIT;