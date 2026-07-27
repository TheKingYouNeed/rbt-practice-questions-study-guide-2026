# RBT Practice Question Sequencing Signals

## Synthetic annotation dataset and audit guide

This resource provides a structured way to study **sequence words** and **role-boundary cues** in original RBT-style practice material. It is designed for learners, trainers, and question authors who want to inspect how a stem changes when it asks for the *first*, *next*, *best*, *most immediate*, or *final* action.

The accompanying CSV contains 36 synthetic annotations. It does not reproduce, recall, or claim to predict secure examination content. Each row describes a fictional study pattern rather than a live exam item, client, or clinical case.

## Files

- `rbt-sequencing-signals.csv` — 36 original annotations grouped into six signal families.
- `README.md` — method, suggested analyses, limitations, disclosure, and source boundaries.

## Dataset schema

| Column | Meaning |
|---|---|
| `record_id` | Stable identifier for the synthetic annotation. |
| `signal_family` | One of six sequencing or decision-boundary families. |
| `stem_signal` | The controlling word or phrase being studied. |
| `common_reading_error` | A typical reasoning mistake caused by underweighting the signal. |
| `audit_question` | A prompt for checking the order or scope of the proposed action. |
| `role_boundary_check` | A non-clinical reminder to compare the option with authorization, training, and supervision. |
| `revision_move` | A question-authoring or study-review action that makes the distinction clearer. |

## The TRACE audit

Use the dataset with the five-part TRACE audit:

1. **T — Target the requested point in time.** Decide whether the stem asks about an immediate response, a later step, or the completed sequence.
2. **R — Read the controlling qualifier literally.** Circle words such as *first*, *before*, *after*, *next*, *best*, and *except*.
3. **A — Arrange the plausible options.** Put the two strongest options into a logical order. An option can be reasonable but premature.
4. **C — Check role and evidence boundaries.** Remove choices that assume facts not provided or require action outside training, authorization, or supervision.
5. **E — Explain the minimum distinction.** Write one sentence stating why the selected option fits the requested moment better than the nearest distractor.

TRACE is an analysis framework, not a rule for clinical decision-making. Official requirements, training, applicable policies, and supervision control real practice.

## Suggested analyses

### 1. Signal-family error count

After a practice block, add one tally beside the signal family for every item you missed or marked uncertain. A cluster around `before_after_boundary`, for example, suggests a reading-order problem rather than a broad content deficit.

### 2. Near-neighbour comparison

Choose two rows from different families and write a fictional two-option contrast. Make both options factually plausible, then change only the controlling signal. This reveals whether the sequence word—not memorized wording—actually determines your choice.

### 3. Unsupported-assumption audit

For each candidate answer, list every fact it assumes. If an option requires information that the stem never supplies, mark that assumption explicitly. This is especially useful for rows in the `available_information` and `role_boundary` families.

### 4. Revision quality check

Question authors can use `revision_move` to remove accidental ambiguity. A strong item should distinguish options through the intended learning objective, not through vague timing, hidden facts, or a trick unrelated to the objective.

## Example workflow

Suppose a fictional practice stem asks what should happen **before** a later documentation step. Two choices may both belong somewhere in a reasonable workflow. TRACE directs the learner to identify the requested time point, arrange the two choices, and explain why one must precede the other. The learner then verifies the governing principle with current authoritative material.

The useful output is not a memorized answer. It is a short decision trace:

- requested time point;
- controlling qualifier;
- two plausible options in order;
- role/evidence boundary;
- source used for verification.

## Product resource

For additional original Android practice, see [RBT Practice Questions on Google Play](https://play.google.com/store/apps/details?id=com.dahmanilimited.rbtpractice). Use the app as one component of a broader study plan alongside current official sources, required training, and supervision.

## Official sources

- [Behavior Analyst Certification Board](https://www.bacb.com/)
- [RBT certification information](https://www.bacb.com/rbt/)
- [BACB ethics information](https://www.bacb.com/ethics-information/)

Always verify certification, examination, eligibility, and ethics requirements on the current official BACB website because requirements may change.

## Disclosure and limitations

This original dataset and guide are published by **Dahmani Limited**, the owner and publisher of the linked RBT Practice Questions Android app. The dataset, guide, and app are independent educational study aids. They are not affiliated with, endorsed by, or sponsored by the BACB.

No row contains a real client, clinical record, confidential information, live examination question, recalled examination question, or secure examination content. The resource provides no pass guarantee, score prediction, certification, supervision, clinical direction, or replacement for required training. Users should follow their supervisor, applicable policies, and the latest official BACB guidance.

## License

The original dataset and guide are released under the Creative Commons Attribution 4.0 International license (CC BY 4.0). Attribution: **Dahmani Limited, 2026**.

