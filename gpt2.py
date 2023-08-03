# Use a pipeline as a high-level helper
from transformers import pipeline


def generate_response():    
    gpt2 = "gpt2"
    llama30b = "OpenAssistant/oasst-sft-6-llama-30b-xor"
    input = "Write a user story to create a downloading the grid data as excel feature"
    pipe = pipeline(task="text-generation", model=gpt2, max_length=None, max_new_tokens=1000)
    return pipe(input, num_return_sequences=1)






# from transformers import AutoTokenizer, AutoModelForCausalLM
# Load model directly
# model = AutoModelForCausalLM.from_pretrained("gpt2")
# tokenizer = AutoTokenizer.from_pretrained("gpt2")
# inputs = tokenizer(prompt, return_tensors="pt")
# outputs = model(**inputs, labels=inputs["input_ids"])
# loss = outputs.loss
# logits = outputs.logits
# Generate
# generate_ids = model.generate(inputs.input_ids, max_length=30)
# tokenizer.batch_decode(generate_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]