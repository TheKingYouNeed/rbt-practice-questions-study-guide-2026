# RBT Practice Question Rationale Traceability: 30 Paired Editorial Annotations

## What this dataset is

This open dataset contains 30 original paired annotations for reviewing the writing quality of rationales used with RBT practice questions. Each row contrasts a weak editorial rationale with a traceable revision. The examples are synthetic: they do not reproduce, reconstruct, paraphrase, or claim access to secure certification-exam items.

The dataset is intended for:

- writers checking whether a rationale points back to the wording of a practice stem;
- editors distinguishing explanation from answer restatement;
- reviewers checking whether a rationale overclaims what a fictional prompt establishes;
- learners studying how qualifiers such as *first*, *best supported*, *according to the record*, and *within the stated role* affect reading;
- researchers prototyping transparent quality-assurance rules for educational content.

It is not an answer key, clinical guide, supervision substitute, training program, or prediction of exam performance.

## The TIDE traceability method

The paired revisions use a four-part editorial method:

1. **Trace** — Point to the exact phrase or fact in the fictional stem that controls the distinction.
2. **Identify** — Name the qualifier, evidence source, time boundary, or role boundary that matters.
3. **Differentiate** — Explain why the nearby alternative answers a different question or requires an unstated assumption.
4. **End at the boundary** — Stop where the fictional evidence stops. Do not add clinical, legal, or supervisory claims that the prompt does not establish.

The method evaluates explanation quality, not whether a real-world behavioral procedure is appropriate. Real practice must follow current official requirements, local rules, employer policy, and qualified supervision.

## File structure

`rbt-rationale-traceability-pairs.csv` contains these columns:

- `pair_id` — stable synthetic row identifier;
- `annotation_family` — one of five editorial quality families;
- `weak_rationale` — a deliberately incomplete or overbroad explanation;
- `weakness_code` — compact label for the defect;
- `traceable_revision` — a stronger editorial explanation;
- `evidence_pointer` — the fictional wording that the revision traces;
- `boundary_note` — the claim the rationale must avoid;
- `reviewer_question` — a reusable quality-control question.

The five annotation families are:

1. **Chronology** — distinguishes immediate, next, later, and completed actions.
2. **Evidence source** — identifies whether the fictional stem points to observation, a written record, a stated definition, or another source.
3. **Qualifier scope** — respects terms such as *best supported*, *most direct*, *initial*, and *except*.
4. **Assumption control** — separates stated facts from plausible but unstated details.
5. **Role boundary** — prevents an editorial rationale from turning a reading distinction into unsupervised professional guidance.

Each family contains six paired annotations. The dataset therefore offers a balanced 30-row audit sample without weighting one kind of writing error more heavily than the others.

## Suggested uses

### Manual editorial audit

Select a rationale from a practice resource and ask:

1. Which phrase in the stem does the rationale cite?
2. Does it name the controlling qualifier?
3. Does it explain the nearest rejected alternative?
4. Does it introduce any fact not present in the prompt?
5. Does it stop before making a real-world clinical or supervisory recommendation?

Compare the result with the closest annotation family in the CSV.

### Annotation exercise

Hide the `weakness_code` and `traceable_revision` columns. Ask reviewers to label the defect and propose a revision. Reveal the reference annotation afterward and discuss differences. More than one revision may be defensible; the dataset models traceability, not a single mandatory writing style.

### Lightweight quality-control prototype

The CSV can be used to test simple rules such as:

- flag rationales that do not repeat or paraphrase a controlling qualifier;
- flag absolute words such as *always* or *proves* when the fictional stem contains limited evidence;
- flag rationales that merely repeat a selected option;
- flag explanations that add an unstated person, setting, cause, or permission;
- prompt a human review when role-boundary language is absent.

Automated flags should remain review aids. They cannot determine clinical correctness or replace a qualified human editor.

## Method and limitations

The annotations were authored specifically for this dataset in July 2026. They use fictional, topic-neutral wording focused on reading and editorial logic. No row is sourced from a certification exam, recalled exam content, test-preparation bank, client record, or confidential training material.

The labels are descriptive rather than psychometrically validated. The dataset has not been tested for inter-rater reliability, predictive validity, or correlation with exam outcomes. Its balanced family counts are an editorial design choice, not an estimate of real-world error prevalence.

The examples deliberately omit clinical facts. This makes them suitable for studying explanation structure but unsuitable for teaching behavioral procedures. Users should validate any production rubric against current official sources and obtain qualified review for professional content.

## Product and ownership disclosure

This dataset is published by **Dahmani Limited**, the owner of the linked **RBT Practice Questions 2026** Android app. The app is available at [the official Google Play listing](https://play.google.com/store/apps/details?id=com.dahmanilimited.rbtpractice).

The linked app and this dataset are independent educational resources. They are not affiliated with, endorsed by, or sponsored by the Behavior Analyst Certification Board (BACB). RBT is a certification mark associated with the BACB. No pass result, score improvement, employment outcome, or certification outcome is promised.

## Official references

For current certification requirements and authoritative terminology, consult the official sources directly:

- [BACB Registered Behavior Technician information](https://www.bacb.com/rbt/)
- [BACB RBT Test Content Outline, 3rd edition](https://www.bacb.com/wp-content/uploads/2025/06/RBT-Test-Content-Outline-3rd-ed-250611-a.pdf)
- [BACB RBT Handbook](https://www.bacb.com/wp-content/uploads/2025/06/RBTHandbook_250611-a.pdf)

If an official source changes, the official source controls.

## License and citation

The README and CSV are released under the Creative Commons Attribution 4.0 International license (CC BY 4.0). Attribution should identify Dahmani Limited, the dataset title, the version, and the Zenodo DOI assigned at publication.

